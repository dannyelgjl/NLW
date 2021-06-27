import styled from 'styled-components/native';
import image from '../../assets/illustration.png';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.defaultColor};
`;

export const ImageHome = styled.Image.attrs({
  source: image,
})``;

export const Content = styled.View``;

export const Title = styled.Text``;

export const SubTitle = styled.Text``;

export const Input = styled.TextInput`
  height: 50px;
  width: 200px;
  border-bottom-width: 2px;
`;