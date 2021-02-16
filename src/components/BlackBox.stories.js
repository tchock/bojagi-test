import React, { useMemo } from 'react';
import BlackBox from './BlackBox';

export default { title: 'BlackBox' };

export const hello = () => {

  const message = useMemo(() => 'YellowHello Shiny Sun', [])

  return <BlackBox color="yellow">{message}</BlackBox>
;

export const bye = () => <BlackBox color="green">Bye :(!</BlackBox>

export const click = () => <BlackBox color="red">Click Me Good!</BlackBox>
