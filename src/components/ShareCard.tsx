import { forwardRef } from 'react';
import { Star, User } from './Icons';

interface ShareCardProps {
  userName: string;
  emoji: string;
  streak: number;
  badges: number;
}

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ userName, emoji, streak, badges }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '400px',
        height: '500px',
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '24px',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>

      <h2 style={{ margin: '0 0 2rem 0', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>
        HYPVZN LEARNING
      </h2>

      <div style={{ 
          width: '120px', 
          height: '120px', 
          background: 'rgba(255,255,255,0.2)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '4rem',
          marginBottom: '1.5rem',
          border: '4px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}>
          {emoji || <User size={64} />}
      </div>

      <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.5rem', fontWeight: 900 }}>{userName || "Friend"}</h1>
      
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <span style={{ fontSize: '2.5rem' }}>🔥</span> {streak}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Day Streak</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
          <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <Star size={36} fill="#fbbf24" /> {badges}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Badges</div>
          </div>
      </div>
      
      <div style={{ marginTop: 'auto', fontSize: '0.9rem', opacity: 0.7 }}>
          Join me at kannadablitz.web.app
      </div>
    </div>
  );
});

export default ShareCard;
