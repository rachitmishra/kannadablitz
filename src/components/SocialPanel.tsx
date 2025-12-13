import { useState, useEffect, useRef } from "react";
import { Users, Copy, Trophy, User, Zap, Edit2, Save, Trash2, X, Lock, Share2 } from "./Icons";
import Button from "./Button";
import { useSocial } from "../hooks/useSocial";
import { useToast } from "../context/ToastContext";
import { useAuth } from "../context/AuthContext";
import ShareCard from "./ShareCard";
import { toPng } from 'html-to-image';

const EMOJIS = ["😀", "😎", "🦊", "🚀", "🐯", "🌟", "🔥", "🦄", "🐼", "🦁"];

export default function SocialPanel() {
  const { friends, nudges, getInviteLink, nudgeFriend, removeFriend, checkUsernameAvailability, updateProfile, login, myProfile } = useSocial();
  const { showToast } = useToast();
  const { setRecoveredUid, effectiveUid } = useAuth();
  const inviteLink = getInviteLink();

  const [isEditing, setIsEditing] = useState(false);
  const [isRecovering, setIsRecovering] = useState(false);
  
  const [newName, setNewName] = useState("");
  const [newEmoji, setNewEmoji] = useState("😀");
  const [newPasscode, setNewPasscode] = useState("");
  
  const [recUsername, setRecUsername] = useState("");
  const [recPasscode, setRecPasscode] = useState("");
  
  const [error, setError] = useState("");

  const shareCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing) return;
    if (myProfile.userName) setNewName(myProfile.userName);
    if (myProfile.emoji) setNewEmoji(myProfile.emoji);
    if (myProfile.passcode) setNewPasscode(myProfile.passcode);
  }, [myProfile, isEditing]);

  const copyLink = () => {
    if (!myProfile.userName) {
        setError("Please set a username before inviting friends.");
        setIsEditing(true);
        return;
    }
    if (inviteLink && navigator.clipboard) {
        navigator.clipboard.writeText(inviteLink)
            .then(() => showToast("Invite link copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    } else {
        console.warn("Clipboard API not available or invite link is missing.");
    }
  };

  const handleNudge = (friendId: string) => {
    nudgeFriend(friendId);
    showToast("Nudge sent!");
  };

  const handleRemove = (friendId: string) => {
      if (window.confirm("Are you sure you want to remove this friend?")) {
          removeFriend(friendId);
          showToast("Friend removed.");
      }
  };

  const handleSaveProfile = async () => {
    setError("");
    if (!newName.trim()) {
      setError("Name cannot be empty");
      return;
    }

    if (newName !== myProfile.userName) {
        const isAvailable = await checkUsernameAvailability(newName);
        if (!isAvailable) {
          setError("Username already taken");
          return;
        }
    }

    const success = await updateProfile(newName, newEmoji, newPasscode);
    if (success) {
      setIsEditing(false);
      showToast("Profile updated!");
    } else {
      setError("Failed to update profile");
    }
  };

  const handleRecovery = async () => {
      setError("");
      if (!recUsername || !recPasscode) {
          setError("Enter username and passcode");
          return;
      }
      
      const uid = await login(recUsername, recPasscode);
      if (uid) {
          setRecoveredUid(uid);
          showToast("Account recovered successfully!");
          setIsRecovering(false);
          setRecUsername("");
          setRecPasscode("");
      } else {
          setError("Invalid credentials");
      }
  };
  
  const handleLogout = () => {
      setRecoveredUid(null);
      showToast("Logged out from recovered account.");
  };

  const handleShare = async () => {
    if (shareCardRef.current === null) {
      showToast("Error generating share image.");
      return;
    }

    try {
      showToast("Generating image...");
      const dataUrl = await toPng(shareCardRef.current, { cacheBust: true, pixelRatio: 2 });
      
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'my-kannadablitz-progress.png', { type: blob.type });

      if (navigator.share) {
          await navigator.share({
            title: 'My KannadaBlitz Learning Progress',
            text: `I'm on a ${myProfile.streak || 0} day streak learning Kannada with KannadaBlitz! My name is ${myProfile.userName || "a Friend"}. Come join the fun!`,
            files: [file],
          });
          showToast("Shared successfully!");
      } else {
          // Fallback to download
          const link = document.createElement('a');
          link.download = 'my-kannadablitz-progress.png';
          link.href = dataUrl;
          link.click();
          showToast("Image downloaded!");
      }
    } catch (err) {
      console.error('Error sharing:', err);
      showToast("Failed to share image.");
    }
  };


  if (isRecovering) {
      return (
          <div className="social-panel">
               <div className="social-header">
                    <h3 className="social-title" style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><Lock size={20} /> Recover Account</h3>
                    <Button onClick={() => setIsRecovering(false)} variant="neutral"><X size={16} /></Button>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <p style={{fontSize: '0.9rem', color: 'var(--muted-text)'}}>Enter your unique username and passcode to restore your progress.</p>
                   <input 
                        type="text" 
                        placeholder="Username" 
                        value={recUsername} 
                        onChange={e => setRecUsername(e.target.value)}
                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-50)', color: 'var(--surface-text)' }}
                   />
                   <input 
                        type="password" 
                        placeholder="Passcode" 
                        value={recPasscode} 
                        onChange={e => setRecPasscode(e.target.value)}
                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-50)', color: 'var(--surface-text)' }}
                   />
                   {error && <p style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{error}</p>}
                   <Button onClick={handleRecovery}>Recover</Button>
               </div>
          </div>
      );
  }

  return (
    <div className="social-panel">
      {/* Hidden container for image generation */}
      <div style={{ 
          position: 'absolute', 
          top: '-9999px', 
          left: '-9999px', 
          width: '400px', // Must match ShareCard's fixed width
          height: '500px', // Must match ShareCard's fixed height
          overflow: 'hidden', 
          pointerEvents: 'none', 
          opacity: 0 
      }}>
          <ShareCard 
            ref={shareCardRef}
            userName={myProfile.userName || "Friend"}
            emoji={myProfile.emoji || "😀"}
            streak={myProfile.streak || 0}
            badges={myProfile.earnedBadges ? myProfile.earnedBadges.length : 0}
          />
      </div>

      {/* Profile Section */}
      <div className="profile-section" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--neutral-300)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={18} /> My Profile
              </h4>
              <div style={{display:'flex', gap: '0.5rem'}}>
                  {!isEditing && (
                      <button onClick={() => setIsEditing(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-text)' }}>
                          <Edit2 size={16} />
                      </button>
                  )}
              </div>
          </div>
          
          {isEditing ? (
              <div className="profile-edit-form">
                  <div style={{ marginBottom: '0.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Username</label>
                      <input 
                        type="text" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Enter unique username"
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-50)', color: 'var(--surface-text)' }}
                      />
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Passcode (for recovery)</label>
                      <input 
                        type="text" 
                        value={newPasscode} 
                        onChange={(e) => setNewPasscode(e.target.value)}
                        placeholder="Set a secret passcode"
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--neutral-300)', background: 'var(--neutral-50)', color: 'var(--surface-text)' }}
                      />
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Avatar</label>
                      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                          {EMOJIS.map(emoji => (
                              <button 
                                key={emoji} 
                                onClick={() => setNewEmoji(emoji)}
                                style={{ 
                                    fontSize: '1.5rem', 
                                    background: newEmoji === emoji ? 'var(--primary-light)' : 'transparent', 
                                    border: newEmoji === emoji ? '2px solid var(--primary)' : '1px solid var(--neutral-300)', 
                                    borderRadius: '50%', 
                                    width: '40px', 
                                    height: '40px', 
                                    cursor: 'pointer',
                                    flexShrink: 0
                                }}
                              >
                                  {emoji}
                              </button>
                          ))}
                      </div>
                  </div>
                  {error && <p style={{ color: 'var(--danger)', fontSize: '0.8rem', margin: '0 0 0.5rem 0' }}>{error}</p>}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button onClick={handleSaveProfile}>
                          <Save size={16} style={{ marginRight: '0.25rem' }}/> Save
                      </Button>
                      <Button onClick={() => setIsEditing(false)} variant="neutral">
                          <X size={16} style={{ marginRight: '0.25rem' }}/> Cancel
                      </Button>
                  </div>
              </div>
          ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontSize: '2rem' }}>{myProfile.emoji || <User size={24} />}</div>
                      <div>
                          <div style={{ fontWeight: 'bold' }}>{myProfile.userName || "Anonymous"}</div>
                          {myProfile.passcode ? (
                              <div style={{ fontSize: '0.7rem', color: 'var(--muted-text)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Lock size={10}/> Passcode set</div>
                          ) : (
                              <div style={{ fontSize: '0.7rem', color: 'var(--muted-text)' }}>Set passcode to recover later</div>
                          )}
                      </div>
                  </div>
                  
                  <div style={{display:'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end'}}>
                       {effectiveUid && localStorage.getItem("recovered_uid") === effectiveUid ? (
                           <button onClick={handleLogout} style={{ fontSize: '0.75rem', color: 'var(--danger)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                               Log Out
                           </button>
                       ) : (
                           <button onClick={() => setIsRecovering(true)} style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                               Recover Account
                           </button>
                       )}
                  </div>
              </div>
          )}
      </div>

      <div className="social-header">
        <h3 className="social-title">
          <Users size={20} className="text-primary" /> Community
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button onClick={handleShare} variant="neutral">
                <Share2 size={16} style={{ marginRight: '0.5rem' }} /> Share Progress
            </Button>
            <Button onClick={copyLink} variant="neutral">
               <Copy size={16} style={{ marginRight: '0.5rem' }} /> Invite Friend
            </Button>
        </div>
      </div>

      <div className="friends-list">
        {friends.length === 0 ? (
          <div className="empty-friends">
            <p>No friends yet. Invite someone to challenge them!</p>
          </div>
        ) : (
          friends.sort((a, b) => b.streak - a.streak).map((friend) => {
            const hasNudgedMe = nudges && nudges[friend.uid];
            return (
            <div key={friend.uid} className="friend-item">
              <div className="friend-info">
                <div className="avatar-wrapper">
                  <div className="avatar-circle">
                    {friend.emoji ? <span style={{fontSize: '1.2rem'}}>{friend.emoji}</span> : <User size={14} />}
                  </div>
                  {hasNudgedMe && (
                    <div className="nudge-badge">
                      <Zap size={10} color="black" fill="black" />
                    </div>
                  )}
                </div>
                <div>
                   <div className="friend-name">
                     {friend.userName}
                     {hasNudgedMe && <span className="nudge-label">NUDGED YOU</span>}
                   </div>
                   <div className="friend-badges">{friend.earnedBadges.length} Badges</div>
                </div>
              </div>
              <div className="friend-stats">
                <div className="friend-streak">
                   <Trophy size={16} />
                   <span>{friend.streak}</span>
                </div>
                <button 
                  onClick={() => handleNudge(friend.uid)}
                  className="nudge-btn"
                  title="Send a nudge"
                  style={{ marginRight: '0.5rem' }}
                >
                  <Zap size={18} />
                </button>
                <button
                    onClick={() => handleRemove(friend.uid)}
                    className="nudge-btn"
                    title="Remove friend"
                    style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}
                >
                    <Trash2 size={16} />
                </button>
              </div>
            </div>
          )})
        )}
      </div>
    </div>
  );
}