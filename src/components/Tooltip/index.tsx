import React from 'react';

import { Container } from './styles';

interface ToolTipProps {
  title: string;
  className?: string; // Informo ao Tooltip que irá receber uma estilização de um elemento superior através do className
}

const Tooltip: React.FC<ToolTipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
