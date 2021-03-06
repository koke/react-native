/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 * @flow
 */

'use strict';

const React = require('react');
const LogBoxInspectorFooter = require('../LogBoxInspectorFooter').default;
const render = require('../../../../jest/renderer');

describe('LogBoxInspectorFooter', () => {
  it('should render two buttons', () => {
    const output = render.shallowRender(
      <LogBoxInspectorFooter onMinimize={() => {}} onDismiss={() => {}} />,
    );

    expect(output).toMatchSnapshot();
  });
});
