// src/utils/animations.js
// Ce fichier contient des animations réutilisables pour l'application

import { motion } from 'framer-motion';
import React from 'react';

// Variants pour les animations de base
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.4 }
  }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.4 }
  }
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

// Variants pour les animations staggered (en cascade)
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Animation de rebond pour les boutons et éléments interactifs
export const bounceVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    } 
  },
  tap: { scale: 0.95 }
};

// Animation d'apparition progressive pour les listes d'éléments
export const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5
    }
  })
};

// Animation de page complète
export const pageTransitionVariants = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// HOC (Higher Order Component) pour envelopper les pages avec des animations
export const withPageTransition = (Component) => {
  return (props) => (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransitionVariants}
    >
      <Component {...props} />
    </motion.div>
  );
};

// Animation pour les cards (destinations, offres, etc.)
export const cardHoverVariants = {
  initial: { 
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  hover: { 
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 15 },
      boxShadow: { duration: 0.3 }
    }
  }
};

// Animation pour l'effet de parallax
export const useParallax = (value, distance) => {
  return {
    y: value * distance,
    transition: { type: 'spring', stiffness: 100, damping: 30 }
  };
};

// Animation de chargement (loader)
export const loaderVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Animation de rebond pour les notifications
export const notificationVariants = {
  initial: { opacity: 0, y: -50, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  }
};

// Animation pour le menu dropdown
export const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95, 
    transformOrigin: 'top' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeIn'
    }
  }
};

// Animation pour les effets de particules du fond
export const generateParticles = (count = 20) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5
  }));
};

// Animation pour les tooltips
export const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
};

// Animation pour le toggle de thème (jour/nuit)
export const themeToggleVariants = {
  light: { rotate: 0 },
  dark: { rotate: 180 },
  transition: { duration: 0.5 }
};

// Animation de scroll pour le texte
export const scrollTextVariants = {
  animate: (custom) => ({
    x: [0, -custom],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }
    }
  })
};

// Animation pour la barre de recherche
export const searchBarVariants = {
  collapsed: { width: '200px' },
  expanded: { 
    width: '300px',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Animation pour les indicateurs de progression (étapes de réservation)
export const progressStepVariants = {
  inactive: { 
    backgroundColor: '#E5E7EB', 
    scale: 1 
  },
  active: { 
    backgroundColor: '#1D4ED8', 
    scale: 1.1,
    transition: { duration: 0.3 }
  },
  completed: { 
    backgroundColor: '#10B981', 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

// Animation pour les images dans les galeries
export const galleryImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Animation pour le modal (fenêtre popup)
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 50,
    transition: { duration: 0.2 }
  }
};

// Overlay pour le modal
export const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// Animation pour les boutons avec effet d'onde
export const rippleEffect = (e) => {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  
  const left = e.clientX - rect.left;
  const top = e.clientY - rect.top;
  
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  ripple.className = 'ripple';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

export default {
  fadeInVariants,
  slideUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  bounceVariants,
  listItemVariants,
  cardHoverVariants,
  loaderVariants,
  notificationVariants,
  dropdownVariants,
  tooltipVariants,
  themeToggleVariants,
  pageTransitionVariants,
  withPageTransition,
  modalVariants,
  modalOverlayVariants,
  searchBarVariants,
  progressStepVariants,
  galleryImageVariants,
  generateParticles,
  rippleEffect
};