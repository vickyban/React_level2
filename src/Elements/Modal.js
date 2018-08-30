import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import { Card } from './Cards';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on &&
          <ModalWrapper>
            <ModelCard>
              <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
              <div>{children}</div>
            </ModelCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        }
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelCard = Card.extend`
  position: relative;
  min-width: 320px;
  z-index: 10;
`;

const CloseButton = styled.button`
${absolute({ y: 'top', x: 'right' })};
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
${absolute({ y: 'top', x: 'left' })};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
`;