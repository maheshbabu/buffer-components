import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import InputDate from './index';

storiesOf('InputDate')
  .addDecorator(checkA11y)
  .add('default', () => (
    <InputDate />
  ));
