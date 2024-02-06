import React from 'react';
import { Text } from 'react-native';

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        marginBottom: 16,
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  );
}

