import {
  trigger,
  style,
  state,
  transition,
  animate
} from '@angular/animations';

export const entraceAnimation = trigger('entraceAnimation', [
  state('active', style({})),
  transition('* => active', [
    style({ transform: 'translateY(50%)' }),
    animate('100ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
  ])
]);

export const arrowAnimation = trigger('arrowAnimation', [
  state('true', style({})),
  transition('* => true', [
    style({ transform: 'translateX(20%)' }),
    animate('300ms ease-in')
  ])
]);
