FROM aquabotwa/X-Notiya:md-beta

RUN git clone https://github.com/X-Notiya/CHAMOD-MD /root/chamodmd
WORKDIR /root/chamodmd/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]


