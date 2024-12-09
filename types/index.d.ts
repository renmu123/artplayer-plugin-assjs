import type Artplayer from "artplayer";
import type ASS from "assjs";

export = artplayerPluginAssJS;
export as namespace artplayerPluginAssJS;

interface Options {
  content?: string;
  delay?: number;
  resampling?:
    | "video_width"
    | "video_height"
    | "script_width"
    | "script_height";
}

declare const artplayerPluginAssJS: (options: Options) => (art: Artplayer) => {
  name: "artplayerPluginAssJS";
  ass: ASS;
  switch: (content: string) => void;
  show: () => void;
  hide: () => void;
  destroy: () => void;
};
