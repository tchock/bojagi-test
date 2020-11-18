import React from 'react';
import BlackBox from './BlackBox';

export default { title: 'BlackBox' };

export const hello = () => <BlackBox color="yellow">Hello!</BlackBox>;

export const bye = () => <BlackBox color="green">Bye :(!</BlackBox>

export const click = () => <BlackBox color="red">Click Me!</BlackBox>
