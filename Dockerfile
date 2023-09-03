FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/DARK-QUEEN-MD/DARK-QUEEN-MD /root/X-Notiya
WORKDIR /root/X-Notiya/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
