import img1 from '../../public/images/photo.jpg';
import img2 from '../../public/images/photo2.jpg';

import mail1 from '../../public/images/mailbox/mailboxscreenshot.jpg'
import mail2 from '../../public/images/mailbox/mailboxwire.jpg'
import mail3 from '../../public/images/mailbox/mailboxflat.png'
import mail4 from '../../public/images/mailbox/mailboxref.png'

import leaf1 from '../../public/images/leaves/leafsplosion.gif'
import leaf2 from '../../public/images/leaves/leavesingame.gif'

import monkeys from '../../public/images/abductedmonkeys.png'

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

export const linkTest = [{
  id: 0,
  name: 'placeholder',
  src: img1,
  alt: 'img1',
  desc: 'first portfolio piece',
  href:'https://www.google.com',
  hoverdesc: 'this one is a link',
  toolsused:[{
    'unity': true,
    'photoshop':true,
    'unreal': true,
    'substance': true,
    'maya': false,
  }]
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
  src: mail2, 
  alt: 'img2',
  desc: 'Wireframe'
},
{
  id: 3,
  src: mail3,
  alt: 'img2',
  desc: 'Texture Flats'
},{
  id: 4,
  src: mail4,
  alt: 'img2',
  desc: 'Referance Photos'
}]
export const leafVFX = [{
  id: 0,
  name: 'Leaf VFX',
  src: leaf2,
  alt: 'Leaf Explosion',
  hoverdesc: 'Unity VFX Graph',
  desc:'Leaves in Game',
  toolsused:[{
    'unity': true,
    'photoshop':true,
    'unreal': false,
    'substance': false,
    'maya': false,
  }]
},
{
  id: 1,
  src: leaf1, 
  alt: 'img2',
  desc: 'Leaf Explosion scale test'
}]

export const monkeySite = [{
  id: 0,
  name: 'Abducted Monkeys Site',
  src: monkeys,
  alt: 'Abducted Monkeys Logo',
  desc: 'first portfolio piece',
  href:'https://abductedmonkeys.com',
  hoverdesc: 'Company Site for Abducted Monkeys',
  toolsused:[{
    'nextjs':true,
    'tailwind':true,
  }]
}];
