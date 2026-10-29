import type { ComponentType } from "react";
import type { PackageRoute } from "@/constants/packages/package-data";
import General180NDetails from "./general-180N";
import General1NDetails from "./general-1N";
import General30NDetails from "./general-30N";
import General360NDetails from "./general-360N";
import General3NDetails from "./general-3N";
import General5G10Details from "./general-5G10";
import General5G135Details from "./general-5G135";
import General5G135NDetails from "./general-5G135N";
import General5G150Details from "./general-5G150";
import General5G150NDetails from "./general-5G150N";
import General5G160BDetails from "./general-5G160B";
import General5G180BDetails from "./general-5G180B";
import General5G20Details from "./general-5G20";
import General5G200CDetails from "./general-5G200C";
import General5G230BDetails from "./general-5G230B";
import General5G280BDetails from "./general-5G280B";
import General5G30Details from "./general-5G30";
import General5G300CDetails from "./general-5G300C";
import General5G330BDetails from "./general-5G330B";
import General5G380BDetails from "./general-5G380B";
import General5G40Details from "./general-5G40";
import General5G480BDetails from "./general-5G480B";
import General5G70Details from "./general-5G70";
import General5GLQ190Details from "./general-5GLQ190";
import General5GLQ210Details from "./general-5GLQ210";
import General5GMXH200Details from "./general-5GMXH200";
import General5GMXH230Details from "./general-5GMXH230";
import General5GVS12Details from "./general-5GVS12";
import General5GVS80Details from "./general-5GVS80";
import General7NDetails from "./general-7N";
import General90NDetails from "./general-90N";
import GeneralC20KDetails from "./general-C20K";
import GeneralEST30Details from "./general-EST30";
import GeneralF30Details from "./general-F30";
import GeneralFB15KDetails from "./general-FB15K";
import GeneralFB50KDetails from "./general-FB50K";
import GeneralFB5KDetails from "./general-FB5K";
import GeneralFT50Details from "./general-FT50";
import GeneralKS110Details from "./general-KS110";
import GeneralKS12Details from "./general-KS12";
import GeneralKS145Details from "./general-KS145";
import GeneralKS165Details from "./general-KS165";
import GeneralKS20Details from "./general-KS20";
import GeneralKS2HDetails from "./general-KS2H";
import GeneralKS36Details from "./general-KS36";
import GeneralKS6HDetails from "./general-KS6H";
import GeneralKS8Details from "./general-KS8";
import GeneralMI20KDetails from "./general-MI20K";
import GeneralMI50KDetails from "./general-MI50K";
import GeneralMXH100Details from "./general-MXH100";
import GeneralMXH120Details from "./general-MXH120";
import GeneralMXH150Details from "./general-MXH150";
import GeneralSD120Details from "./general-SD120";
import GeneralSD135Details from "./general-SD135";
import GeneralSD150Details from "./general-SD150";
import GeneralSD90Details from "./general-SD90";
import GeneralST120KDetails from "./general-ST120K";
import GeneralST150KDetails from "./general-ST150K";
import GeneralST15KDetails from "./general-ST15K";
import GeneralST30KDetails from "./general-ST30K";
import GeneralST60NDetails from "./general-ST60N";
import GeneralST70KDetails from "./general-ST70K";
import GeneralST7KDetails from "./general-ST7K";
import GeneralST90NDetails from "./general-ST90N";
import GeneralT15KDetails from "./general-T15K";
import GeneralT50KDetails from "./general-T50K";
import GeneralT5KDetails from "./general-T5K";
import GeneralTH30Details from "./general-TH30";
import GeneralTRE60Details from "./general-TRE60";
import GeneralTRE90Details from "./general-TRE90";
import GeneralTV120CDetails from "./general-TV120C";
import GeneralTV120KDetails from "./general-TV120K";
import GeneralTV125KDetails from "./general-TV125K";
import GeneralTV35KDetails from "./general-TV35K";
import GeneralTV65KDetails from "./general-TV65K";
import GeneralTV75KDetails from "./general-TV75K";
import GeneralTV90CDetails from "./general-TV90C";
import GeneralTV95KDetails from "./general-TV95K";
import GeneralV100KDetails from "./general-V100K";
import GeneralV120BDetails from "./general-V120B";
import GeneralV120CDetails from "./general-V120C";
import GeneralV120NDetails from "./general-V120N";
import GeneralV150BDetails from "./general-V150B";
import GeneralV150CDetails from "./general-V150C";
import GeneralV150NDetails from "./general-V150N";
import GeneralV15BDetails from "./general-V15B";
import GeneralV160BDetails from "./general-V160B";
import GeneralV180BDetails from "./general-V180B";
import GeneralV200BDetails from "./general-V200B";
import GeneralV200CDetails from "./general-V200C";
import GeneralV25BDetails from "./general-V25B";
import GeneralV30XDetails from "./general-V30X";
import GeneralV35BDetails from "./general-V35B";
import GeneralV50KDetails from "./general-V50K";
import GeneralV90BDetails from "./general-V90B";
import GeneralVM100Details from "./general-VM100";
import GeneralVM130Details from "./general-VM130";
import GeneralVM80Details from "./general-VM80";
import GeneralYT15KDetails from "./general-YT15K";
import GeneralYT50KDetails from "./general-YT50K";
import GeneralYT5KDetails from "./general-YT5K";
import PostpaidMXH120Details from "./postpaid-MXH120";
import PostpaidMXH150Details from "./postpaid-MXH150";
import PostpaidMXH200Details from "./postpaid-MXH200";
import PostpaidMXH250Details from "./postpaid-MXH250";
import PostpaidN1000Details from "./postpaid-N1000";
import PostpaidN200Details from "./postpaid-N200";
import PostpaidN2000Details from "./postpaid-N2000";
import PostpaidN250Details from "./postpaid-N250";
import PostpaidN300Details from "./postpaid-N300";
import PostpaidN350Details from "./postpaid-N350";
import PostpaidN400Details from "./postpaid-N400";
import PostpaidN500Details from "./postpaid-N500";
import PostpaidV120KDetails from "./postpaid-V120K";
import PostpaidV160XDetails from "./postpaid-V160X";
import PostpaidV180XDetails from "./postpaid-V180X";
/** Route-specific details; the shared page shell is composed by PackageContent. */
export const packageDetailsByRoute = {
  "/goi-cuoc-viettel/180N": General180NDetails,
  "/goi-cuoc-viettel/1N": General1NDetails,
  "/goi-cuoc-viettel/30N": General30NDetails,
  "/goi-cuoc-viettel/360N": General360NDetails,
  "/goi-cuoc-viettel/3N": General3NDetails,
  "/goi-cuoc-viettel/5G10": General5G10Details,
  "/goi-cuoc-viettel/5G135": General5G135Details,
  "/goi-cuoc-viettel/5G135N": General5G135NDetails,
  "/goi-cuoc-viettel/5G150": General5G150Details,
  "/goi-cuoc-viettel/5G150N": General5G150NDetails,
  "/goi-cuoc-viettel/5G160B": General5G160BDetails,
  "/goi-cuoc-viettel/5G180B": General5G180BDetails,
  "/goi-cuoc-viettel/5G20": General5G20Details,
  "/goi-cuoc-viettel/5G200C": General5G200CDetails,
  "/goi-cuoc-viettel/5G230B": General5G230BDetails,
  "/goi-cuoc-viettel/5G280B": General5G280BDetails,
  "/goi-cuoc-viettel/5G30": General5G30Details,
  "/goi-cuoc-viettel/5G300C": General5G300CDetails,
  "/goi-cuoc-viettel/5G330B": General5G330BDetails,
  "/goi-cuoc-viettel/5G380B": General5G380BDetails,
  "/goi-cuoc-viettel/5G40": General5G40Details,
  "/goi-cuoc-viettel/5G480B": General5G480BDetails,
  "/goi-cuoc-viettel/5G70": General5G70Details,
  "/goi-cuoc-viettel/5GLQ190": General5GLQ190Details,
  "/goi-cuoc-viettel/5GLQ210": General5GLQ210Details,
  "/goi-cuoc-viettel/5GMXH200": General5GMXH200Details,
  "/goi-cuoc-viettel/5GMXH230": General5GMXH230Details,
  "/goi-cuoc-viettel/5GVS12": General5GVS12Details,
  "/goi-cuoc-viettel/5GVS80": General5GVS80Details,
  "/goi-cuoc-viettel/7N": General7NDetails,
  "/goi-cuoc-viettel/90N": General90NDetails,
  "/goi-cuoc-viettel/C20K": GeneralC20KDetails,
  "/goi-cuoc-viettel/EST30": GeneralEST30Details,
  "/goi-cuoc-viettel/F30": GeneralF30Details,
  "/goi-cuoc-viettel/FB15K": GeneralFB15KDetails,
  "/goi-cuoc-viettel/FB50K": GeneralFB50KDetails,
  "/goi-cuoc-viettel/FB5K": GeneralFB5KDetails,
  "/goi-cuoc-viettel/FT50": GeneralFT50Details,
  "/goi-cuoc-viettel/KS110": GeneralKS110Details,
  "/goi-cuoc-viettel/KS12": GeneralKS12Details,
  "/goi-cuoc-viettel/KS145": GeneralKS145Details,
  "/goi-cuoc-viettel/KS165": GeneralKS165Details,
  "/goi-cuoc-viettel/KS20": GeneralKS20Details,
  "/goi-cuoc-viettel/KS2H": GeneralKS2HDetails,
  "/goi-cuoc-viettel/KS36": GeneralKS36Details,
  "/goi-cuoc-viettel/KS6H": GeneralKS6HDetails,
  "/goi-cuoc-viettel/KS8": GeneralKS8Details,
  "/goi-cuoc-viettel/MI20K": GeneralMI20KDetails,
  "/goi-cuoc-viettel/MI50K": GeneralMI50KDetails,
  "/goi-cuoc-viettel/MXH100": GeneralMXH100Details,
  "/goi-cuoc-viettel/MXH120": GeneralMXH120Details,
  "/goi-cuoc-viettel/MXH150": GeneralMXH150Details,
  "/goi-cuoc-viettel/SD120": GeneralSD120Details,
  "/goi-cuoc-viettel/SD135": GeneralSD135Details,
  "/goi-cuoc-viettel/SD150": GeneralSD150Details,
  "/goi-cuoc-viettel/SD90": GeneralSD90Details,
  "/goi-cuoc-viettel/ST120K": GeneralST120KDetails,
  "/goi-cuoc-viettel/ST150K": GeneralST150KDetails,
  "/goi-cuoc-viettel/ST15K": GeneralST15KDetails,
  "/goi-cuoc-viettel/ST30K": GeneralST30KDetails,
  "/goi-cuoc-viettel/ST60N": GeneralST60NDetails,
  "/goi-cuoc-viettel/ST70K": GeneralST70KDetails,
  "/goi-cuoc-viettel/ST7K": GeneralST7KDetails,
  "/goi-cuoc-viettel/ST90N": GeneralST90NDetails,
  "/goi-cuoc-viettel/T15K": GeneralT15KDetails,
  "/goi-cuoc-viettel/T50K": GeneralT50KDetails,
  "/goi-cuoc-viettel/T5K": GeneralT5KDetails,
  "/goi-cuoc-viettel/TH30": GeneralTH30Details,
  "/goi-cuoc-viettel/TRE60": GeneralTRE60Details,
  "/goi-cuoc-viettel/TRE90": GeneralTRE90Details,
  "/goi-cuoc-viettel/TV120C": GeneralTV120CDetails,
  "/goi-cuoc-viettel/TV120K": GeneralTV120KDetails,
  "/goi-cuoc-viettel/TV125K": GeneralTV125KDetails,
  "/goi-cuoc-viettel/TV35K": GeneralTV35KDetails,
  "/goi-cuoc-viettel/TV65K": GeneralTV65KDetails,
  "/goi-cuoc-viettel/TV75K": GeneralTV75KDetails,
  "/goi-cuoc-viettel/TV90C": GeneralTV90CDetails,
  "/goi-cuoc-viettel/TV95K": GeneralTV95KDetails,
  "/goi-cuoc-viettel/V100K": GeneralV100KDetails,
  "/goi-cuoc-viettel/V120B": GeneralV120BDetails,
  "/goi-cuoc-viettel/V120C": GeneralV120CDetails,
  "/goi-cuoc-viettel/V120N": GeneralV120NDetails,
  "/goi-cuoc-viettel/V150B": GeneralV150BDetails,
  "/goi-cuoc-viettel/V150C": GeneralV150CDetails,
  "/goi-cuoc-viettel/V150N": GeneralV150NDetails,
  "/goi-cuoc-viettel/V15B": GeneralV15BDetails,
  "/goi-cuoc-viettel/V160B": GeneralV160BDetails,
  "/goi-cuoc-viettel/V180B": GeneralV180BDetails,
  "/goi-cuoc-viettel/V200B": GeneralV200BDetails,
  "/goi-cuoc-viettel/V200C": GeneralV200CDetails,
  "/goi-cuoc-viettel/V25B": GeneralV25BDetails,
  "/goi-cuoc-viettel/V30X": GeneralV30XDetails,
  "/goi-cuoc-viettel/V35B": GeneralV35BDetails,
  "/goi-cuoc-viettel/V50K": GeneralV50KDetails,
  "/goi-cuoc-viettel/V90B": GeneralV90BDetails,
  "/goi-cuoc-viettel/VM100": GeneralVM100Details,
  "/goi-cuoc-viettel/VM130": GeneralVM130Details,
  "/goi-cuoc-viettel/VM80": GeneralVM80Details,
  "/goi-cuoc-viettel/YT15K": GeneralYT15KDetails,
  "/goi-cuoc-viettel/YT50K": GeneralYT50KDetails,
  "/goi-cuoc-viettel/YT5K": GeneralYT5KDetails,
  "/goi-cuoc-viettel/tra-sau/MXH120": PostpaidMXH120Details,
  "/goi-cuoc-viettel/tra-sau/MXH150": PostpaidMXH150Details,
  "/goi-cuoc-viettel/tra-sau/MXH200": PostpaidMXH200Details,
  "/goi-cuoc-viettel/tra-sau/MXH250": PostpaidMXH250Details,
  "/goi-cuoc-viettel/tra-sau/N1000": PostpaidN1000Details,
  "/goi-cuoc-viettel/tra-sau/N200": PostpaidN200Details,
  "/goi-cuoc-viettel/tra-sau/N2000": PostpaidN2000Details,
  "/goi-cuoc-viettel/tra-sau/N250": PostpaidN250Details,
  "/goi-cuoc-viettel/tra-sau/N300": PostpaidN300Details,
  "/goi-cuoc-viettel/tra-sau/N350": PostpaidN350Details,
  "/goi-cuoc-viettel/tra-sau/N400": PostpaidN400Details,
  "/goi-cuoc-viettel/tra-sau/N500": PostpaidN500Details,
  "/goi-cuoc-viettel/tra-sau/V120K": PostpaidV120KDetails,
  "/goi-cuoc-viettel/tra-sau/V160X": PostpaidV160XDetails,
  "/goi-cuoc-viettel/tra-sau/V180X": PostpaidV180XDetails,
} satisfies Record<PackageRoute, ComponentType>;
