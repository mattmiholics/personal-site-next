import img1 from '../../public/images/photo.jpg';
import img2 from '../../public/images/photo2.jpg';

import mail1 from '../../public/images/mailbox/mailboxscreenshot.jpg'
import mail2 from '../../public/images/mailbox/mailboxwire.jpg'
import mail3 from '../../public/images/mailbox/mailboxflat.png'
import mail4 from '../../public/images/mailbox/mailboxref.png'

//keeping around as placeholder
export const people = [{
  id: 0,
  name: 'placeholder',
  src: img1,
  alt: 'img1',
  desc: 'first portfolio piece',
  hoverdesc: 'hover text',
  toolsused:[{
    'unity': true,
    'photoshop':true,
    'unreal': true,
    'substance': true,
    'maya': false,
  }]
}, {
  id: 1,
  name: 'asdfg',
  src: img2, 
  alt: 'img2',
  desc: 'second portfolio piece'
},
{
  id: 3,
  name: 'asdfg',
  src: img2,
  alt: 'img2',
  desc: 'third portfolio piece'
}];

export const mailbox = [{
  id: 0,
  name: 'Mailbox',
  src: mail1,
  alt: 'Screenshot of Mailbox',
  hoverdesc: 'Unreal Engine 4 Asset',
  desc:'In-Engine Render of Mailbox',
  toolsused:[{
    'unity': false,
    'photoshop':false,
    'unreal': true,
    'substance': true,
    'maya': true,
  }]
},
{
  id: 1,
  name: 'asdfg',
  src: mail2, 
  alt: 'img2',
  desc: 'Wireframe'
},
{
  id: 3,
  name: 'asdfg',
  src: mail3,
  alt: 'img2',
  desc: 'Texture Flats'
},{
  id: 4,
  name: 'asdfg',
  src: mail4,
  alt: 'img2',
  desc: 'Referance Photos'
}]
