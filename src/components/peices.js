import img1 from '../../public/images/photo.jpg';
import img2 from '../../public/images/photo2.jpg';

import mail1 from '../../public/images/mailbox/mailboxscreenshot.jpg'
import mail2 from '../../public/images/mailbox/mailboxwire.jpg'
import mail3 from '../../public/images/mailbox/mailboxflat.png'
import mail4 from '../../public/images/mailbox/mailboxref.png'

import leaf1 from '../../public/images/leaves/leafsplosion.gif'
import leaf2 from '../../public/images/leaves/leavesingame.gif'

import lockjawUI1 from '../../public/images/lockjawui/fullgameui.gif'
import lockjawUI2 from '../../public/images/lockjawui/individualpartcooldowns.gif'
import lockjawUI3 from '../../public/images/lockjawui/pickupui.png'
import lockjawUI4 from '../../public/images/lockjawui/colorbasedui.png'

import explosionVFX1 from '../../public/images/explosionvfx/explosionvfxingame.gif'
import explosionVFX2 from '../../public/images/explosionvfx/explosionvfx.gif'
import explosionVFX3 from '../../public/images/explosionvfx/explosionlargevfx.gif'

import bench1 from '../../public/images/bench/benchscreenshot.png'
import bench2 from '../../public/images/bench/benchwire.jpg'
import bench3 from '../../public/images/bench/benchflats.png'
import bench4 from '../../public/images/bench/benchflats2.png'
import bench5 from '../../public/images/bench/benchref.png'


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
  name: 'Leaf Explosion',
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

export const lockjawUI = [{
  id: 0,
  name: 'Lockjaw - Inventory UI',
  src: lockjawUI1,
  alt: 'Inventory Implementation',
  hoverdesc: 'Unity',
  desc:'Robots causing changes to UI',
  toolsused:[{
    'unity': true,
    'photoshop':false,
    'unreal': false,
    'substance': false,
    'maya': false,
  }]
},
{
  id: 1,
  src: lockjawUI2, 
  alt: 'img2',
  desc: 'UI Accounts for different cooldowns'
},
{
  id: 2,
  src: lockjawUI3, 
  alt: 'img2',
  desc: 'Pickup Tool-tip over robot'
},
{
  id: 3,
  src: lockjawUI4, 
  alt: 'img2',
  desc: 'Lives account for different Robot Colors'
}];

export const explosionVFX = [{
  id: 0,
  name: 'Explosion VFX',
  src: explosionVFX1,
  alt: 'explosion gif',
  hoverdesc: 'Unity VFX Graph',
  desc:'In-game view of VFX',
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
  src: explosionVFX2, 
  alt: 'img2',
  desc: 'Isolated view of explosion'
},
{
  id: 2,
  src: explosionVFX3, 
  alt: 'img2',
  desc: 'Unused larger explosion'
}];

export const bench = [{
  id: 0,
  name: 'Bench',
  src: bench1,
  alt: 'bench',
  hoverdesc: 'Unreal Engine 4 Asset',
  desc:'In-Engine Render of Mailbox',
  toolsused:[{
    'unity': true,
    'photoshop':true,
    'unreal': false,
    'substance': false,
    'maya': true,
  }]
},
{
  id: 1,
  src: bench2, 
  alt: 'img2',
  desc: 'Wireframe of bench'
},
{
  id: 2,
  src: bench3, 
  alt: 'img2',
  desc: 'Bench Texture flats 1'
},
{
  id: 3,
  src: bench4, 
  alt: 'img2',
  desc: 'Bench Texture flats 2'
}
,
{
  id: 4,
  src: bench5, 
  alt: 'img2',
  desc: 'Refernace photos for bench'
}];

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
