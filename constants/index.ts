import {
  CircleUserRound,
  ImageIcon,
  ImageMinus,
  LayoutDashboardIcon,
  Palette,
  ScissorsSquare,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'

export const navLinks = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    label: 'Image Restore',
    route: '/transformations/add/restore',
    icon: ImageIcon,
  },
  {
    label: 'Generative Fill',
    route: '/transformations/add/fill',
    icon: Sparkles,
  },
  {
    label: 'Object Remove',
    route: '/transformations/add/remove',
    icon: ImageMinus,
  },
  {
    label: 'Object Recolor',
    route: '/transformations/add/recolor',
    icon: Palette,
  },
  {
    label: 'Background Remove',
    route: '/transformations/add/removeBackground',
    icon: ScissorsSquare,
  },
  {
    label: 'Profile',
    route: '/profile',
    icon: CircleUserRound,
  },
  {
    label: 'Buy Credits',
    route: '/credits',
    icon: ShoppingBag,
  },
]

export const plans = [
  {
    _id: 1,
    name: 'Free',
    icon: '/assets/icons/free-plan.svg',
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: '20 Free Credits',
        isIncluded: true,
      },
      {
        label: 'Basic Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: false,
      },
      {
        label: 'Priority Updates',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: 'Pro Package',
    icon: '/assets/icons/free-plan.svg',
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: '120 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: 'Premium Package',
    icon: '/assets/icons/free-plan.svg',
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: '2000 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: true,
      },
    ],
  },
]

export const transformationTypes = {
  restore: {
    type: 'restore',
    title: 'Restore Image',
    subTitle: 'Refine images by removing noise and imperfections',
    config: { restore: true },
    icon: 'image.svg',
    headerIcon: ImageIcon,
  },

  fill: {
    type: 'fill',
    title: 'Generative Fill',
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: 'stars.svg',
    headerIcon: Sparkles,
  },
  remove: {
    type: 'remove',
    title: 'Object Remove',
    subTitle: 'Identify and eliminate objects from images',
    config: {
      remove: { prompt: '', removeShadow: true, multiple: true },
    },
    icon: 'scan.svg',
    headerIcon: ImageMinus,
  },
  recolor: {
    type: 'recolor',
    title: 'Object Recolor',
    subTitle: 'Identify and recolor objects from the image',
    config: {
      recolor: { prompt: '', to: '', multiple: true },
    },
    icon: 'filter.svg',
    headerIcon: Palette,
  },
  removeBackground: {
    type: 'removeBackground',
    title: 'Background Remove',
    subTitle: 'Removes the background of the image using AI',
    config: { removeBackground: true },
    icon: 'camera.svg',
    headerIcon: ScissorsSquare,
  },
}

export const aspectRatioOptions = {
  '1:1': {
    aspectRatio: '1:1',
    label: 'Square (1:1)',
    width: 1000,
    height: 1000,
  },
  '3:4': {
    aspectRatio: '3:4',
    label: 'Standard Portrait (3:4)',
    width: 1000,
    height: 1334,
  },
  '9:16': {
    aspectRatio: '9:16',
    label: 'Phone Portrait (9:16)',
    width: 1000,
    height: 1778,
  },
}

export const defaultValues = {
  title: '',
  aspectRatio: '',
  color: '',
  prompt: '',
  publicId: '',
}

export const creditFee = -1

export const gradientStyle = {
  color: '#9820e3',
  backgroundImage: '-webkit-linear-gradient(0deg, #9820e3 0%, #ffc107 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
}
