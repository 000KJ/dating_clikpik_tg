const OPTIONS1 = {
  reply_markup: {
    resize_keyboard: true,
    one_time_keyboard: false,
    keyboard: [["оценить фото", "мои фото"]],
  },
};

const OPTIONS2 = {
  reply_markup: {
    resize_keyboard: true,
    one_time_keyboard: false,
    keyboard: [["back"], ["плохо", "нормально", "хорошо"]],
  },
};

const OPTIONS3 = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "👎", callback_data: "dislike" },
        { text: "👀", callback_data: "normal" },
        { text: "👍", callback_data: "like" },
      ],
    ],
  },
};

const OPTIONS4 = {
  // reply_markup: {
  //     resize_keyboard: true,
  //     one_time_keyboard: true,
  //     keyboard: [["back"], ["плохо", "нормально", "хорошо"]]
  //   }
};

module.exports = { OPTIONS1, OPTIONS2, OPTIONS3, OPTIONS4 };
