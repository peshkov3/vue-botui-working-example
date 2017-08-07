var botui = new BotUI('my-botui-app');

botui.message.add({
  content: 'Hello World from bot!'
});

botui.message.add({
  human: true,
  content: 'Hello World from human!'
});