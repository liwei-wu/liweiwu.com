const redirectWorker = {
  async fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "liweiwu.com";

    return Response.redirect(url.toString(), 308);
  },
};

export default redirectWorker;
