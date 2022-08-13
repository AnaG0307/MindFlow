const admin = require("firebase-admin") ;
const config = require("../config/index");

//Admin authentication firebase

const serviceAccount = {
  "type":"service_account",
  "project_id": "mindflow-5e3c5",
  "private_key_id": "cc432d6b27488b7032f5b7a840ad5c79d1946421",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCupzYG73hH5S0U\njVSlof4wLXumHLEabcGrfBIHpi8zIs00qmMqNIfXcKpF8QBm0PS0Kl3px5pzeg6r\nEaGxAv3TNsRXja3q6ockoizlkrS7W06Sm82my+ITGR+nwzrKE5HYtdx7aW9KpGf1\nYttTVfyYf/tGAVYqSsi1VpeAcKdEzX2AuyFfVSxvwMrpCIQFEVuVObneof1ET7Tl\nmtQaTZ6LxzCduFt9chriINULZwLSXVxh//F0MPYLJR8WLo1+VKBITwvoSOUVAZ0L\nh1ky5oXt+qHCKa7/HFEM1sAnRdfSasq+K0bRNeGluJmyRYKaVsEwT5T1bnbeLoji\nCPxILANbAgMBAAECggEAB7kZKIFaXkOCFNCTF6fsJ5E7UIMgSbzkvYKFAZWVrLsz\nO8r1C567CwnOXb1keSdwSq886+OJruWM1H+5GKy7MKXRVNXNBQBN7Y7GUXiFSWum\nM9Fz7JZDbvjDb5WwedMXte+EymhFJZXTiwROEodQ3iV6pQPWHZSk/2/Ozz0sCFzD\nIpZiOSURcx+XEuW87SLSDzCQGkCBw/XaAlRm1b/whOJFkHlr9sMfEoO77Dca9pxx\na1zgM4qyvAOmTPnqEKu18+/cmfY0IJKNTwiO30VBBsqc/7PWhKBXIj1oAth/xa7p\nlEwMe1srRQzpe4+486XznzpzW8T5xD0PJZBrmaneAQKBgQDcSlgT36C5CzAyoH78\nwtqjAaA1dIzNQNgAl4d4rcPtiCTmGKAI9h3Yl88DllDjML5AhBgSA1O8LL7pnqk3\ndHSOm17vHrAgQjJgyzH2q8dwo3/ImQfzxr7B1uK5mG764TIUfi484TRlX6LqIpHr\nC8nbyS7XPCuGzHmRSQIIRkupgQKBgQDK9wDtYssDMC12rBwBncDGLfUYv4n3nQff\nZbatYxsR72xdth+G/AO13fKNcUkT/vUlbKHFnBHZsgUv70laDOYFVuoO2Ir6/mNM\nXX8WksVOh3bNpiSJ4yIKp4GyFfMThK74v8GbkbFlo+HfkyDoWizZo13+uFk9WE2q\n3cqax58C2wKBgQCItvb8toAH94KdGPBWrBOGsL6eDkxIIiMsEt63rZf4NdM4njXL\n+frB7k1C26otpZWdcp2BqGDyWw7M7HP2f6bKznBXlMMX8h1T5yeGAEwRgtcORrMh\nvsmqgVNKfej6eIJdJ4ZIsDeVZoo0JupKZpGLfss8NxKIYSRdX2MMgZv5gQKBgGv/\nMocd4lg38nkK63wQrNrG6XvZr1gKPn4oaSOpcGYCt+7FUdFJl8/V4ZJRjUkOiPL4\n8rtraDQl/YycDrPT2TFOJgzwPEOByOSBe3ZPcp1uh1C17wtPyHVS3DgeZdEk8NV7\nc1GMHJCwuydz6ja4hNTpkMJQ5Ws26VzZ10y0m2+xAoGBANq6r6QpXjIHiyIHg3sb\nJn8/VHUrBtIYzpyVdqj9NM2+ehh2jyXtZA3scMLe2p45E5CgTW6TQZjjYVM9G0HO\nkco4i0kuQBoN3P2YUUS5e8U1TfWj3vri8VcxKeuT6hHpYhHR4WsDLSD8z0xlXP/y\nMpVbJcXLsAF5csyqkYCpFiTY\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-vd7cj@mindflow-5e3c5.iam.gserviceaccount.com",
  "client_id": "117811824411446110969",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vd7cj%40mindflow-5e3c5.iam.gserviceaccount.com"
};

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = {
  auth: firebase.auth()
};