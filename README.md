# artplayer-plugin-assjs

`artplayer-plugin-assjs` is a plugin for loading ASS subtitles without webAssembly in Artplayer.

## Installation

`npm i artplayer-plugin-assjs`

## Usage

More usage in [assjs](https://github.com/weizhenye/ASS)

```js
import Artplayer from "artplayer";
import artplayerPluginAssJS from "artplayer-plugin-assjs";

const art = new Artplayer({
  container: ".artplayer-app",
  url: "path/to/video.mp4",
  plugins: [
    artplayerPluginAssJS({
      content: assContent,
    }),
  ],
});

// art.plugins.artplayerPluginAssJS.switch(newContent)
```

## Options

- content (string): ASS subtitle content.
- delay (number): Subtitle delay time in seconds.
- resampling (string): Subtitle resampling method, can be "video_width", "video_height", "script_width", "script_height".

## Methods

- switch(content: string): Switch subtitle content.
- show(): Show subtitles.
- hide(): Hide subtitles.
- destroy(): Destroy subtitle instance.
