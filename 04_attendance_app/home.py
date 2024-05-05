import streamlit as st

st.set_page_config(page_title='Attendance System', layout='wide')
st.header('Attendance System Using Face Recog')

with st.spinner('Loading Models and connecting to Redis db...'):
    import face_recog

st.success('Model loaded and Redis db Successfully Connected')
