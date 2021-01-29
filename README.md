
iptools
=======
Tools for working with IP4/IP6 IP Addresses including IPv4, IPv6, CIDR, and Subnet Masks

![Build Status](https://mindpowered.dev/assets/images/github-badges/build-passing.svg)

Contents
========

* [Source Code and Documentation](#source-code-and-documentation)
* [Licensing](#licensing)
* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)

# Source Code and Documentation
- Source Code: [https://github.com/mindpowered/ip-tools-js](https://github.com/mindpowered/ip-tools-js)
- Documentation: [https://mindpowered.github.io/ip-tools-js](https://mindpowered.github.io/ip-tools-js)

# Licensing
To obtain a version of this package under the MIT License, follow the instructions to [get a license][purchase]. The MIT License has no restrictions on commercial use and permits reuse within proprietary software.

# About
IPv4 uses a 32-bit address for its Internet addresses. All IPv4 addresses are now assigned. IPv6 utilizes 128-bit Internet addresses so there are 1028 times more addresses. Mappings exist for converting from an IPv4 address to an IPv6 addresses. This allows interoperability.

An IP address consists of octets delimited by dots (".") for IPv4 or colons (":") for IPv6. We can compress IPv6 addresses by removing extra zeros to make the address shorter. Computers store IP addresses as their corresponding integer values. The number represented by this integer is its decimal representation.

Subnetting is the process of dividing a network into smaller network sections. A part of the IP address is *masked* off to define a network. The remaining part of the address identifies a device on the network. CIDR is an alternative way of representing a subnet mask and IP address range.

# Requirements
- ES6
- npm


Third-party dependencies may have additional requirements.

# Installation
## npm

You can retrieve the iptools package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the iptools package with
```
npm i @mindpowered/iptools --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file.

## package.json

You can also add the package directly to your packages.json file.

...


# Usage
```javascript

let mpcipt = require('@mindpowered/iptools');
const {IPTools} = mpcipt;

let ipt = new IPTools();
let decimal = ipt.IPToDecimal("192.168.1.1");

```


# Support
We are here to support using this package. If it doesn't do what you're looking for, isn't working, or you just need help, please [Contact us][contact].

There is also a public [Issue Tracker][bugs] available for this package.



[bugs]: https://github.com/mindpowered/ip-tools-js/issues
[contact]: https://mindpowered.dev/support.html?ref=ip-tools-js/
[docs]: https://mindpowered.github.io/ip-tools-js/
[licensing]: https://mindpowered.dev/?ref=ip-tools-js
[purchase]: https://mindpowered.dev/purchase/
