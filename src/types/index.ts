export interface GameConfig {
  id: string;
  title: string;
  description: string;
  instructions: string;
  options: Array<string>;
  correctOption: string;
  explanation: string;
}

export interface VisionGameConfig extends GameConfig {
  imageSrc: string;
}

export interface HearingGameConfig extends GameConfig {
  videoSrc1: string;
  videoSrc2: string;
}