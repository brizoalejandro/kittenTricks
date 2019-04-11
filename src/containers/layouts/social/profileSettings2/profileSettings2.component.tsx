import React from 'react';
import {
  ButtonProps,
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  ProfileSetting,
  ProfilePhoto,
} from '@src/components/social';
import { Text } from '@src/components/common';
import { CameraIcon } from '@src/assets/icons';
import { Profile } from '@src/core/model';

interface ComponentProps  {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

export type ProfileSettings2Props = ThemedComponentProps & ComponentProps;

class ProfileSettings2Component extends React.Component<ProfileSettings2Props> {

  private onButtonPress = () => {
    this.props.onButtonPress();
  };

  private onPhotoButtonPress = () => {
    this.props.onUploadPhotoButtonPress();
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        activeOpacity={0.95}
        icon={CameraIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto
            style={themedStyle.photo}
            source={{uri: profile.photo}}
            button={this.renderPhotoButton}
          />
          <View style={themedStyle.nameSection}>
            <ProfileSetting
              style={themedStyle.nameParameter}
              value={profile.firstName}
            />
            <ProfileSetting
              style={themedStyle.nameParameter}
              value={profile.lastName}
            />
          </View>
        </View>
        <View style={themedStyle.descriptionSection}>
          <Text style={themedStyle.description}>{profile.about}</Text>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            hint='Email'
            value={profile.email}
          />
          <ProfileSetting
            hint='Gender'
            value={profile.gender}
          />
          <ProfileSetting
            hint='Age'
            value={profile.age}
          />
          <ProfileSetting
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ProfileSetting
            hint='Height'
            value={`${profile.height} cm`}
          />
        </View>
        <Button
          style={themedStyle.button}
          size='giant'
          onPress={this.onButtonPress}>
          BUTTON
        </Button>
      </ScrollView>
    );
  }
}

export const ProfileSettings2 = withStyles(ProfileSettings2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  photoSection: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 32,
    backgroundColor: theme['color-white'],
  },
  nameSection: {
    flex: 1,
    marginLeft: 32,
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: theme['color-white'],
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['color-white'],
  },
  nameParameter: {
    marginVertical: 8,
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  description: {
    color: theme['color-basic-600'],
  },
  photo: {
    width: 76,
    height: 76,
  },
  photoButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    transform: [{ translateY: 60 }],
    backgroundColor: theme['color-basic-700'],
  },
  button: {
    height: 40,
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));