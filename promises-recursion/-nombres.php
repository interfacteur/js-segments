<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/javascript; charset=utf-8");
header("Cache-Control: no-cache");
if (count($_GET) > 0 && ! empty($_GET["callback"]) && ! empty($_GET["nombre"])) {
	echo htmlentities($_GET["callback"])."(";
	switch ($_GET["nombre"]) {
		case 2:
			echo "[]";
			break;
		case 3:
			echo "[]";
			break;
		case 4:
			echo "[2]";
			break;
		case 5:
			echo "[]";
			break;
		case 6:
			echo "[2,3]";
			break;
		case 7:
			echo "[]";
			break;
		case 9:
			echo "[3]";
			break;
		case 10:
			echo "[2,5]";
			break;
		case 11:
			echo "[]";
			break;
		case 12:
			echo "[2,3,4,6]";
			break;
		case 13:
			echo "[]";
			break;
		case 14:
			echo "[2,7]";
			break;
		case 15:
			echo "[3,5]";
			break;
		case 16:
			echo "[2,4]";
			break;
		case 17:
			echo "[]";
			break;
		case 18:
			echo "[2,3,6,9]";
			break;
		case 19:
			echo "[]";
			break;
		case 20:
			echo "[2,4,5,10]";
			break;
		case 54:
			echo "[2,3,6,9,18]";
			break;
		case 76:
			echo "[2,4,19]";
			break;
		case 234:
			echo "[2,3,6,9,13,18]";
			break;
		case 340:
			echo "[2,4,5,10,17,20]";
			break;
		case 532:
			echo "[2,4,7,14,19,76]";
			break;
		case 540:
			echo "[2,3,4,5,6,9,10,12,15,18,20,54]";
			break;
		case 780:
			echo "[2,3,4,5,6,10,12,13,15,20]";
			break;
		case 1386:
			echo "[2,3,6,7,9,11,14,18]";
			break;
		case 2660:
			echo "[2,4,5,7,10,14,19,20,76,532]";
			break;
		case 4212:
			echo "[2,3,4,6,9,12,13,18,54,234]";
			break;
		case 4500:
			echo "[2,3,4,5,6,9,10,12,15,18,20]";
			break;
		case 4680:
			echo "[2,3,4,5,6,9,10,12,13,15,18,20,234,780]";
			break;
		case 4800:
			echo "[2,3,4,5,6,10,12,15,16,20]";
			break;
		case 5040:
			echo "[2,3,4,5,6,7,9,10,12,14,15,16,18,20]";
			break;
		case 5760:
			echo "[2,3,4,5,6,9,10,12,15,16,18,20]";
			break;
		case 6080:
			echo "[2,4,5,10,16,19,20,76]";
			break;
		case 8208:
			echo "[2,3,4,6,9,12,16,18,19,54,76]";
			break;
		case 9000:
			echo "[2,3,4,5,6,9,10,12,15,18,20,4500]";
	}
	echo ")";
}
