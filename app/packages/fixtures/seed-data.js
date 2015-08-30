Letterpress.Utils.seedData = function () {
  Letterpress.Collections.Pages.remove({});

  Letterpress.Collections.Pages.insert({
    path: '/',
    template: 'landing-page',
    description: '' +
    '![Cover](/cover.jpg "Cover")' +
    '\n\n' +
    '*Write your own book with this WYSIWYG markdown powered book app*' +
    '\n\n' +
    '[Buy It](# "Buy It")',
    premiumContent: '#Welcome to Letterpress' +
    '\n\n' +
    ''
  });

  Letterpress.Collections.Pages.insert({
    title: 'Buy it now',
    template: 'info',
    path: '/buy',
    description: '' +
    '##Coming soon' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Subscribe Confirmation',
    template: 'info',
    path: '/subscribe-confirmation',
    description: '' +
    '##Thank you for your purchase. You are now subscribed' +
    '\n\n' +
    'Please check your email and click on your confirmation link to sign in.' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Subscription Expired',
    template: 'info',
    path: '/subscription-expired',
    description: '' +
    '##You need to resubscribe to access this content. ' +
    '\n\n' +
    '[Home](/ "Home") [Buy It](# "Buy It")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Charge Confirmation',
    template: 'info',
    path: '/charge-confirmation',
    description: '' +
    '##Thank you for your purchase. You have completed your purchase' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Yikes!',
    template: 'info',
    path: '/error',
    description: '' +
    '##Looks like something went wrong' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Chapter 1',
    template: 'chapter',
    description: 'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
    'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
    'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate.',
    premiumContent: '' +
    loremIpsumBacon() +
    '\n\n' +
    '[Home](/ "Home")',
    order: 1
  });

  Letterpress.Collections.Pages.insert({
    title: 'Chapter 2',
    template: 'chapter',
    description: 'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter ' +
    'proident. Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck ' +
    'pork ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip ' +
    'swine bresaola.',
    premiumContent: '' +
    loremIpsumBacon() +
    '\n\n' +
    '[Home](/ "Home")',
    order: 2
  });

  Letterpress.Collections.Pages.insert({
    title: 'Chapter 3',
    template: 'video-chapter',
    description: 'This is a video chapter that has nothing to do with bacon.',
    previewVideo: 'http://www.w3schools.com/html/mov_bbb.mp4',
    premiumVideo: '/meteor-testing/sample.mp4',
    premiumContent: '' +
    '[Home](/ "Home")',
    order: 3
  });

  function loremIpsumBacon () {
    return '###Premium Content' +
      '\n\n' +
      'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
      'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
      'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. ' +
      'Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip ' +
      'in meatball. Landjaeger voluptate commodo minim, pariatur pig kielbasa biltong nulla sint ' +
      'beef cillum.' +
      '\n\n' +
      'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter proident. ' +
      'Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck pork ' +
      'ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip swine ' +
      'bresaola eu t-bone ribeye adipisicing.' +
      '\n\n' +
      'Sed ad leberkas dolore aute capicola deserunt in ribeye proident turkey. Ipsum pork loin ' +
      'cow excepteur commodo, ex ad non exercitation porchetta tongue nostrud pork chop aliqua. ' +
      'Brisket pork aute t-bone sunt enim elit nisi ex ut irure commodo esse nostrud. Est quis ' +
      'proident do. Excepteur quis eu velit.' +
      '\n\n' +
      'Occaecat fatback spare ribs sed pork pastrami. Adipisicing frankfurter dolore, hamburger ' +
      'corned beef drumstick venison. Tongue aute culpa salami alcatra adipisicing pork belly. ' +
      'Duis sed eiusmod, cillum mollit kielbasa pancetta qui meatball porchetta velit.' +
      '\n\n' +
      'Laboris jowl adipisicing beef ribs ham, lorem cillum mollit t-bone consectetur doner do ' +
      'nulla in. Non esse ut, filet mignon frankfurter tenderloin pancetta. Ullamco sausage ' +
      'excepteur, elit cupidatat velit pastrami ipsum chuck. Irure enim beef ribs mollit, ' +
      'landjaeger leberkas ullamco laborum chuck meatball pork loin. Eu irure flank chuck ' +
      'consectetur nulla in fatback sunt filet mignon.';

  }
};
