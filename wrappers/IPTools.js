/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const iptools = require('../lib/iptools.js');

/**
 * IP Address Conversion and CIDR calculator
 */
class IPTools {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new iptools.iptools.IPTools(bus);
	}

	/**
	 * Convert a subnet mask to CIDR notation
	 * @param {string} subnet_mask A subnet mask eg. 255.255.0.0
	 * @return {Promise} object containing information about subnet including CIDR prefix Promise will resolve to type object.
	*/
	SubnetMaskToCIDR(subnet_mask) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [subnet_mask];
		let ret = jsbus.call('IPTools.SubnetMaskToCIDR', args);
		return ret;
	}

	/**
	 * Given an IP address or IP address with CIDR notation, provides information about an IP address range
	 * @param {string} ip_addr An IP address with or without CIDR notation
	 * @return {Promise} a list of objects containing information about the IP address range Promise will resolve to type array.
	*/
	CalcCIDR(ip_addr) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip_addr];
		let ret = jsbus.call('IPTools.CalcCIDR', args);
		return ret;
	}

	/**
	 * Convert an IP address to a Decimal representation
	 * @param {string} ip_addr An IP address
	 * @return {Promise} Decimal representation of the provided IP address Promise will resolve to type string.
	*/
	IPToDecimal(ip_addr) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip_addr];
		let ret = jsbus.call('IPTools.IPToDecimal', args);
		return ret;
	}

	/**
	 * Convert from a Decimal representationan of an IP address
	 * @param {string} ip4_number Decimal representation of an IP address
	 * @return {Promise} The IP address Promise will resolve to type string.
	*/
	IP4FromDecimal(ip4_number) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip4_number];
		let ret = jsbus.call('IPTools.IP4FromDecimal', args);
		return ret;
	}

	/**
	 * Convert from a Decimal representationan of an IP address
	 * @param {string} ip6_number Decimal representation of an IP address
	 * @return {Promise} The IP address Promise will resolve to type string.
	*/
	IP6FromDecimal(ip6_number) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip6_number];
		let ret = jsbus.call('IPTools.IP6FromDecimal', args);
		return ret;
	}

	/**
	 * Convert an IPv4 address to an IPv6 address
	 * @param {string} ip_addr An IPv4 address
	 * @return {Promise} An object containing IPv6 representations of the provided IPv4 address Promise will resolve to type object.
	*/
	IPv4ToIPv6(ip_addr) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip_addr];
		let ret = jsbus.call('IPTools.IPv4ToIPv6', args);
		return ret;
	}

	/**
	 * Expand the zeros in an IPv6 address
	 * @param {string} ip6_addr An IPv6 address
	 * @return {Promise} The same IPv6 address with zeros expanded Promise will resolve to type object.
	*/
	ExpandIPv6(ip6_addr) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip6_addr];
		let ret = jsbus.call('IPTools.ExpandIPv6', args);
		return ret;
	}

	/**
	 * Compress the zeros in an IPv6 address
	 * @param {string} ip6_addr An IPv6 address
	 * @return {Promise} The same IPv6 address with zeros compressed Promise will resolve to type object.
	*/
	CompressIPv6(ip6_addr) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ip6_addr];
		let ret = jsbus.call('IPTools.CompressIPv6', args);
		return ret;
	}

}
module.exports = IPTools;

