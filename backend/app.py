from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # เปิดให้ทุก origin เรียก API ได้

# เส้นทางทดสอบ
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Suwimon Profile API is running 🚀"
    })

# เส้นทางข้อมูลโปรไฟล์
@app.route('/api/profile', methods=['GET'])
def get_profile():
    profile_data = {
        "name": "สุวิมล แก้มะ (ฟ้า)",
        "birthday": "1997-10-10",
        "age": 26,
        "blood_type": "A",
        "line_id": "miyeonx97",
        "phone": "096-171-7604",
        "email": "suwimon5001@gmail.com",
        "address": "59/264 นันทวันเซนต์ 1 ถ.สังฆสันติสุข แขวงกระทุ่มราย หนองจอก กทม. 10530",
        "skills": [
            "บริการลูกค้าและสื่อสารดีเยี่ยม",
            "จัดการเวลาและงานได้ดี",
            "ตรวจสอบสต็อกและลงข้อมูลละเอียด",
            "เรียนรู้ไว ปรับตัวเร็ว",
            "สื่อสารไทย-อังกฤษคล่อง มีพื้นฐานญี่ปุ่น",
            "ใช้ MS Office, Canva, Bard ได้คล่อง"
        ]
    }
    return jsonify(profile_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
