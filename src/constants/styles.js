import styled from 'styled-components';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#bcbcbc',
  brand: '#6D28D9',
  green: '#10B980',
  red: '#EF4444',
  onlyRed: '#F95656',
  newRed: '#D02E2E',
  orange: '#f8c25f',
  neoGreen: '#b9cd86',
  ecomilliLeafGreen: '#006B4F',
  ecomilliJustLime: '#E5ECD4',
  ecomilliLiteGreen: '#CEDEA5',
  ecomilliJustOrange: '#ED9657',
  ecomilliPaleLemon: '#F6FAEE',
  ecomilliJustBlack: '#0B0C0B',
  ecomilliLiteGrey: (245, 245, 245),
  justGrey: '#999999',
};

const {
  primary,
  secondary,
  tertiary,
  darkLight,
  brand,
  green,
  red,
  ecomilliLeafGreen,
  ecomilliJustLime,
  ecomilliLiteGreen,
  ecomilliJustOrange,
  ecomilliPaleLemon,
  ecomilliJustBlack,
} = Colors;

// Removed from StyledContainer
// padding-top: ${StatusBarHeight + 30}px;

// Removed from PageTitle
// padding: 5px;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.ecomilliLeafGreen};

  ${props =>
    props.welcome &&
    `
    font-size: 20px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${props =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${ecomilliJustLime};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${ecomilliJustOrange};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;

  ${props =>
    props.google == true &&
    `
    background-color: ${secondary};
    flex-direction: row;
    justify-content: center;
    padding:15px;
  `}
  ${props =>
    props.logout == true &&
    `
    background-color: ${ecomilliLiteGreen};
    flex-direction: row;
    justify-content: center;
    padding-top: 6px;
    padding-bottom:6px;
  
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;

  ${props =>
    props.google == true &&
    `
    color: ${ecomilliJustOrange};
    padding: 0px;
    font-weight: bold;
  `}
  ${props =>
    props.logout == true &&
    `
    color: ${ecomilliLeafGreen};
    padding: 0px;
    font-weight: bold;
    
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => (props.type == 'SUCCESS' ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${ecomilliLeafGreen};
  font-size: 15px;
  font-weight: bold;
`;
