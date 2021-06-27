import React, { useState } from 'react';
import { Container, Title, Input, ImageHome } from './styles';

const SingIn: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <ImageHome />

      <Title>
        Daniel Gomes Jeronimo Leite
      </Title>

      <Input
        value={text}
        onChangeText={setText}
        placeholder="Digite algo"
      />
    </Container>
  );
}

export default SingIn;