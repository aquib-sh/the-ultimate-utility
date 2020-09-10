import qrcode

"""
AUTHOR: SHAIKH AQUIB
THIS CLASS WILL GENERATE QR CODES PNG IMAGES FROM THE INFO PROVIDED

"""

class QR:
	def create(self, info):
		img = qrcode.make(info)
		image_path = 'res/qr_file.png'
		img.save(image_path)
		return image_path 