const form = document.getElementById('form');
const title = document.getElementById('title');
const text = document.getElementById('text');

const button = document.getElementById('submit');

class SendRequest {
  constructor(title, text) {
    this.body = {title, text};

    this.verify = this.verify.bind(this);
  }

  async verify() {
    const response = await axios({
      method: "POST",
      url: '/new',
      data: this.body,
    })

    const { data } = response;

    if (data.success) {
      return true;
    } else {
      return false;
    }
  }
}

function send(e, title, text) {
  e.preventDefault();

  if (!title && !text) {
    return alert('title and text has empty');
  }

  const request = new SendRequest(title, text);
  const test = request.verify();

  if (test) {
    window.location.replace('/');
  } else {
    return alert('invalid data, try again.');
  }
}


form.onsubmit = (e) => send(e, title.value, text.value);
