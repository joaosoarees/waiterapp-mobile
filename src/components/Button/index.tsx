import React from 'react';
import { Text } from '../Text';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

type ByttonProps = {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ByttonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && <Text weight="600" color="#FFF">{children}</Text>}

      {loading && (
        <ActivityIndicator
          color="#FFF"
        />
      )}
    </Container>
  );
}
