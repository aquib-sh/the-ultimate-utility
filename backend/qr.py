import qrcode

class QR:
	def create(self, info):
		img = qrcode.make(info)
		image_path = 'res/qr_file.png'
		img.save(image_path)
		return image_path 