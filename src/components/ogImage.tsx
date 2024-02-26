import Image from "next/image";
import { ImageResponse } from "next/og";
import mailbox from "../../public/images/mailbox/mailboxscreenshot.jpg"

export default function ogImage(){
    return new ImageResponse(
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 52,
            fontWeight: 600,
            padding: '15px 20px',
            color: '#1e2124',
            margin: '0 auto',
          }}
        >
          {/* @ts-ignore */}
          <Image src={mailbox} width="425" height="430" alt={mailbox} style={{ margin: '0 0 15px 0' }}/>
        </div>
      , {
      }
      );
  }