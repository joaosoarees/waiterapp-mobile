import React from 'react';
import { Text } from '../Text';
import { Container } from './styles';

type ByttonProps = {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ByttonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#FFF">{children}</Text>
    </Container>
  );
}
