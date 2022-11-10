import React, { useContext } from "react";
import { Avatar, List, Button } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const AuthorInfo = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const AuthorInfoContainer = styled.View`
  flex: 0.4;
  align-items: center;
`;

const AuthorPhotoContainer = styled.View`
  flex: 0.6;
  align-items: center;
  justify-content: center;
`;

// const List.Section = styled(List.Item)`
//   padding: ${(props) => props.theme.space[3]};
// `;

export const AboutAuthorScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

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
      <Button
        icon="logout"
        mode="contained"
        onPress={onLogout}
        buttonColor="red"
      >
        Logout
      </Button>
    </SafeArea>
  );
};
