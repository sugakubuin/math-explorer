import React, { useEffect } from 'react';

interface AdSenseProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSense({
  client = 'ca-pub-2977781707743268',
  slot = '', // 必要に応じてAdSense管理画面で発行したスロットIDを入れる
  format = 'auto',
  responsive = true,
  className = '',
  style = { display: 'block' }
}: AdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as any).adsbygoogle || [];
        // まだ初期化されていない枠に対してのみpushされるように簡易チェック
        if (!document.querySelector(`ins[data-ad-client="${client}"][data-ad-slot="${slot}"] > iframe`)) {
            adsbygoogle.push({});
        }
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, [client, slot]);

  return (
    <div className={`ads-container overflow-hidden w-full ${className}`}>
        <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        />
    </div>
  );
}
