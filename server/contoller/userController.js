import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers(); //사용자 정보를 모두 조회해서 users 변수에 담음
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}