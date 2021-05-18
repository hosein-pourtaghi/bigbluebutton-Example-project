export interface ICreateMeetingRequest {
  name: string;
  meetingID: string;
  // attendeePW: string;
  // moderatorPW: string;
  // welcome: string;
  // dialNumber: string;
  // voiceBridge?: number;
  // maxParticipants?: number;
  // logoutURL: string;
  record?: boolean;
  // duration?: number;
  // isBreakout?: boolean;
  // parentMeetingID: string;
  // sequence?: number;
  // meta: any;
  // freeJoin?: boolean;
  autoStartRecording?: boolean;
  allowStartStopRecording?: boolean;
  webcamsOnlyForModerator?: boolean;
  // logo: string;
  // bannerText: string;
  // bannerColor: string;
  // copyright: string;
  muteOnStart?: boolean;
  allowModsToUnmuteUsers?: boolean;
  lockSettingsDisableCam?: boolean;
  lockSettingsDisableMic?: boolean;
  // lockSettingsDisablePrivateChat?: boolean;
  // lockSettingsDisablePublicChat?: boolean;
  // lockSettingsDisableNote?: boolean;
  // lockSettingsLockedLayout?: boolean;
  // lockSettingsLockOnJoin?: boolean;
  // lockSettingsLockOnJoinConfigurable?: boolean;
  // guestPolicy: string;
}

export class CreateMeetingRequest {
  name: string;
  meetingID: string;
  // attendeePW: string;
  // moderatorPW: string;
  // welcome: string;
  // dialNumber: string;
  // voiceBridge?: number;
  // maxParticipants?: number;
  // logoutURL: string;
  record?: boolean;
  // duration?: number;
  // isBreakout?: boolean;
  // parentMeetingID: string;
  // sequence?: number;
  // meta: any;
  // freeJoin?: boolean;
  autoStartRecording?: boolean;
  allowStartStopRecording?: boolean;
  webcamsOnlyForModerator?: boolean;
  // logo: string;
  // bannerText: string;
  // bannerColor: string;
  // copyright: string;
  muteOnStart?: boolean;
  allowModsToUnmuteUsers?: boolean;
  lockSettingsDisableCam?: boolean;
  lockSettingsDisableMic?: boolean;
  // lockSettingsDisablePrivateChat?: boolean;
  // lockSettingsDisablePublicChat?: boolean;
  // lockSettingsDisableNote?: boolean;
  // lockSettingsLockedLayout?: boolean;
  // lockSettingsLockOnJoin?: boolean;
  // lockSettingsLockOnJoinConfigurable?: boolean;
  // guestPolicy: string;

  constructor(
    name: string = "",
    meetingID: string = "",
    // attendeePW: string = "",
    // moderatorPW: string = "",
    // welcome: string = "",
    // dialNumber: string = "",
    // parentMeetingID: string = "",
    // meta: any = null,
    // logo: string = "",
    // bannerText: string = "",
    // bannerColor: string = "",
    // copyright: string = "",
    guestPolicy: string = "",
    // logoutURL: string = "",

    // voiceBridge?: number,
    // maxParticipants?: number,
    record?: boolean,
    // duration?: number,
    // isBreakout?: boolean,
    // sequence?: number,
    // freeJoin?: boolean,
    autoStartRecording = false,
    allowStartStopRecording = true,
    webcamsOnlyForModerator = false,
    muteOnStart = false,
    allowModsToUnmuteUsers = true,
    lockSettingsDisableCam = false,
    lockSettingsDisableMic = false
    // lockSettingsDisablePrivateChat?: boolean,
    // lockSettingsDisablePublicChat?: boolean,
    // lockSettingsDisableNote?: boolean,
    // lockSettingsLockedLayout?: boolean,
    // lockSettingsLockOnJoin?: boolean,
    // lockSettingsLockOnJoinConfigurable?: boolean
  ) {
    this.name = name;
    this.meetingID = meetingID;
    // // this.attendeePW = attendeePW;
    // // this.moderatorPW = moderatorPW;
    // // this.welcome = welcome;
    // // this.dialNumber = dialNumber;
    // // this.voiceBridge = voiceBridge;
    // // this.maxParticipants = maxParticipants;
    // // this.logoutURL = logoutURL;
    this.record = record;
    // // this.duration = duration;
    // // this.isBreakout = isBreakout;
    // // this.parentMeetingID = parentMeetingID;
    // // this.sequence = sequence;
    // // this.meta = meta;
    // // this.freeJoin = freeJoin;
    this.autoStartRecording = autoStartRecording;
    this.allowStartStopRecording = allowStartStopRecording;
    this.webcamsOnlyForModerator = webcamsOnlyForModerator;
    // this.logo = logo;
    // // this.bannerText = bannerText;
    // // this.bannerColor = bannerColor;
    // // this.copyright = copyright;
    this.muteOnStart = muteOnStart;
    this.allowModsToUnmuteUsers = allowModsToUnmuteUsers;
    this.lockSettingsDisableCam = lockSettingsDisableCam;
    this.lockSettingsDisableMic = lockSettingsDisableMic;
    // // this.lockSettingsDisablePrivateChat = lockSettingsDisablePrivateChat;
    // // this.lockSettingsDisablePublicChat = lockSettingsDisablePublicChat;
    // // this.lockSettingsDisableNote = lockSettingsDisableNote;
    // // this.lockSettingsLockedLayout = lockSettingsLockedLayout;
    // // this.lockSettingsLockOnJoin = lockSettingsLockOnJoin;
    // this.lockSettingsLockOnJoinConfigurable =
    // lockSettingsLockOnJoinConfigurable;
    // this.guestPolicy = guestPolicy;
  }
}
