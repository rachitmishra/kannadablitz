import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, arrayUnion, arrayRemove, onSnapshot, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface FriendProfile {
  uid: string;
  userName: string;
  streak: number;
  earnedBadges: string[];
  emoji?: string;
}

export interface MyProfile {
    userName?: string;
    emoji?: string;
    passcode?: string;
    streak?: number;
    earnedBadges?: string[];
}

export const useSocial = () => {
  const { effectiveUid } = useAuth();
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [nudges, setNudges] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [myProfile, setMyProfile] = useState<MyProfile>({});

  // Load friends, nudges, and my profile
  useEffect(() => {
    if (!effectiveUid) return;

    // Listen to my user doc to get friend list and nudges
    const unsub = onSnapshot(doc(db, "users", effectiveUid), async (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const friendIds: string[] = data.friends || [];
        setNudges(data.nudges || {});
        setMyProfile({ 
            userName: data.userName, 
            emoji: data.emoji, 
            passcode: data.passcode,
            streak: data.streak || 0,
            earnedBadges: data.earnedBadges || []
        });
        
        if (friendIds.length > 0) {
          // Fetch details for each friend
          const friendPromises = friendIds.map(async (fid) => {
            const fDoc = await getDoc(doc(db, "users", fid));
            if (fDoc.exists()) {
              const fData = fDoc.data();
              return {
                uid: fid,
                userName: fData.userName || "Anonymous",
                streak: fData.streak || 0,
                earnedBadges: fData.earnedBadges || [],
                emoji: fData.emoji
              } as FriendProfile;
            }
            return null;
          });
          
          const resolvedFriends = (await Promise.all(friendPromises)).filter(f => f !== null) as FriendProfile[];
          setFriends(resolvedFriends);
        } else {
            setFriends([]);
        }
      }
    });

    return () => unsub();
  }, [effectiveUid]);

  const addFriend = async (friendId: string) => {
    if (!effectiveUid || !friendId || friendId === effectiveUid) return false;
    setLoading(true);
    try {
      // Add friend to my list
      const myRef = doc(db, "users", effectiveUid);
      await setDoc(myRef, {
        friends: arrayUnion(friendId)
      }, { merge: true });

      // Add me to friend's list (Mutual)
      const friendRef = doc(db, "users", friendId);
      // We use setDoc with merge to ensure doc exists or update it safely
      await setDoc(friendRef, {
        friends: arrayUnion(effectiveUid)
      }, { merge: true });
      
      return true;
    } catch (e) {
      console.error("Error adding friend", e);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const removeFriend = async (friendId: string) => {
    if (!effectiveUid || !friendId) return;
    setLoading(true);
    try {
      const myRef = doc(db, "users", effectiveUid);
      await setDoc(myRef, { friends: arrayRemove(friendId) }, { merge: true });

      const friendRef = doc(db, "users", friendId);
      await setDoc(friendRef, { friends: arrayRemove(effectiveUid) }, { merge: true });
    } catch (e) {
      console.error("Error removing friend", e);
    } finally {
      setLoading(false);
    }
  };

  const nudgeFriend = async (friendId: string) => {
    if (!effectiveUid || !friendId) return;
    try {
      const friendRef = doc(db, "users", friendId);
      await setDoc(friendRef, {
        nudges: {
            [effectiveUid]: Date.now()
        }
      }, { merge: true });
    } catch (e) {
      console.error("Error nudging friend", e);
    }
  };

  const checkUsernameAvailability = async (name: string) => {
    const q = query(collection(db, "users"), where("userName", "==", name));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // If found, check if it's me
      const isMe = querySnapshot.docs.length === 1 && querySnapshot.docs[0].id === effectiveUid;
      return isMe;
    }
    return true;
  };

  const updateProfile = async (name: string, emoji: string, passcode?: string) => {
    if (!effectiveUid) return false;
    try {
      const userRef = doc(db, "users", effectiveUid);
      const data: any = { userName: name, emoji: emoji };
      if (passcode) data.passcode = passcode;
      await setDoc(userRef, data, { merge: true });
      return true;
    } catch (e) {
      console.error("Error updating profile", e);
      return false;
    }
  };

  const login = async (username: string, passcode: string) => {
    try {
        const q = query(collection(db, "users"), where("userName", "==", username), where("passcode", "==", passcode));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].id;
        }
    } catch(e) {
        console.error("Login failed", e);
    }
    return null;
  };

  const getInviteLink = () => {
    if (!effectiveUid) return "";
    return `${window.location.origin}?invite=${effectiveUid}`;
  };

  return { friends, nudges, addFriend, removeFriend, nudgeFriend, getInviteLink, loading, checkUsernameAvailability, updateProfile, login, myProfile };
};