import ASS from "assjs";

export default function artplayerPluginAssJS(option) {
  return (art) => {
    const defaultsOptions = {
      content: "",
      delay: 0,
      resampling: "video_width",
    };
    const options = Object.assign(defaultsOptions, option);
    let ass = new ASS(options.content, art.video, {
      container: art.video.parentNode,
      resampling: options.resampling,
    });
    ass.delay = options.delay;

    const switchContent = (content) => {
      ass.destroy();

      ass = new ASS(content, art.video, {
        container: art.video.parentNode,
      });
    };
    return {
      name: "artplayerPluginAssJS",
      ass: ass,
      show: ass.show(),
      hide: ass.hide(),
      switch: switchContent,
      destroy: () => {
        ass.destroy();
      },
    };
  };
}
