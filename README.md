# MQTT Service
- deskripsi
    ```
    MQTT atau Message Queuing Telemetry Transport merupakan protokol komunikasi data dengan konsep publish/subscribe. publisher dan subscriber merupakan event-driven dan memungkinkan dari server untuk mengirim pesan ke client kapanpun dibutuhkan {2 arah komunikasi}. pusat komunikasi adalah MQTT Broker yang bertanggung jawab terdistribusinya pesan.
    ```

- how to use
    ```bash
    # install dependency
    npm install

    # run broker first [!important]
    npm  run start:broker

    # run subscriber
    npm run start:subs

    # run publisher
    npm run start:pubs
    ```

- referensi
    - [implementasi](https://medium.com/@alifabdullah/setting-up-private-mqtt-broker-using-mosca-in-node-js-c61a3c74f952)
    - [teori](https://medium.com/pujanggateknologi/berkenalan-dengan-teknologi-mqtt-7e63cab9d00d)
    - [mosca-issue](https://stackoverflow.com/questions/64189045/node-js-mosca-broker-error-expected-schema-to-be-an-object-or-boolean)
    - [npm-mosca](https://github.com/moscajs/mosca)