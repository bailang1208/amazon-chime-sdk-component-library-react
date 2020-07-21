// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { BaseProps } from '../Base';
import IconButton from '../Button/IconButton';
import { StyledHeader } from './Styled';
import { Remove } from '../icons';

export interface NavbarHeaderProps extends BaseProps {
  title?: string;
  onClose?: () => void;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ title = 'Navigation', onClose }: NavbarHeaderProps) => (
  <StyledHeader>
    <span className='title'>{title}</span>
    {onClose && <IconButton className="btn-close" label="Close" onClick={onClose} icon={<Remove />} />}
  </StyledHeader>
);

export default NavbarHeader;