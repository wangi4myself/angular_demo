import { trigger, state, transition, style, animate, keyframes, group, query, stagger, animation } from '@angular/animations';
export const cardAnim = trigger('card', [
    state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
    state('hover', style({transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px 6px #ccc', 'border-radius': '4px'})),
    transition('out=>hover', animate('100ms ease-in')),
    transition('hover=>out', animate('100ms ease-out')),
]);

export const tasksAnim = trigger('item', [
    state('in', style({'border-left-width': '3px'})),
    state('out', style({'border-left-width': '8px'})),
    transition('out=>hover', animate('100ms ease-in')),
    transition('hover=>out', animate('100ms ease-out')),
]);

export const SlideToRight = trigger('routeAnim', [
    state('void', style({position: 'fixed', width: '100%', height: '100%'})),
    state('*', style({position: 'fixed', width: '100%', height: '100%'})),
    transition('void=>*', [
        style({transform: 'translateX(-100%)', opacity: 0 }),
        group([
            animate('.5s ease-in-out', style({transform: 'translateX(0)'})),
            animate('.3s ease-in', style({opacity: 1}))
        ])
    ]),
    transition('*=>void', [
        style({transform: 'translateX(0)', opacity: 1}),
        group([
            animate('.5s ease-in-out', style({transform: 'translateX(100%)'})),
            animate('.3s ease-in', style({opacity: 0}))
        ])
    ]),
]);

export const listAnimation = trigger('listAnim', [
    // state('void', style({position: 'fixed', width: '100%', height: '100%'})),
    // state('*', style({position: 'fixed', width: '100%', height: '100%'})),
    // transition('void=>*', [
    //     style({transform: 'translateX(-100%)', opacity: 0 }),
    //     group([
    //         animate('.5s ease-in-out', style({transform: 'translateX(0)'})),
    //         animate('.3s ease-in', style({opacity: 1}))
    //     ])
    // ]),
    transition('*=>*', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger(100, [
            animate('1s', style({opacity: 1}))
        ]), {optional: true}),

        query(':leave', style({opacity: 1}), {optional: true}),
        query(':leave', stagger(100, [
            animate('1s', style({opacity: 0}))
        ]), {optional: true}),
    ]),
]);
