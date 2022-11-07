import React from "react";
import { Text } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";

export const AuthorInfo = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const AuthorInfoContainer = styled.View`
  flex: 0.4;
  align-items: center;
`;

export const AuthorPhotoContainer = styled.View`
  flex: 0.6;
  align-items: center;
  justify-content: center;
`;

export const AboutAuthorScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <AuthorPhotoContainer>
        <Avatar.Image
          size={250}
          source={{
            uri: "https://i.ibb.co/QMkRDzn/Me-2-square.jpg",
          }}
        />
      </AuthorPhotoContainer>
      <AuthorInfoContainer>
        <AuthorInfo>Developer: Lubomyr Maevskiy</AuthorInfo>
        <AuthorInfo>Company: LimeStone Digital</AuthorInfo>
        <AuthorInfo>
          "Problems are not stop signs, they are guidelines"
        </AuthorInfo>
      </AuthorInfoContainer>
    </SafeArea>
  );
};
