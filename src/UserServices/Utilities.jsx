const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleString('en-US', options);
};

export const timeAgo = (Time) => {
  const now = new Date();
  const postDate = new Date(Time);

  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} sec ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hr ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year ago`;
};

 const getBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=error=>reject(error);
    })
   }

   const formatInterviewTime=(dateStr)=>{
    const date =  new Date(dateStr);

    return date.toLocaleString('en-US',{
      year:'numeric',
      month:'long',
      day:'numeric',
      hour:'numeric',
      minute:'numeric',
      hour12:true
    });
   }

   function openBase64PDF(base64String) {
  if (!base64String) {
    alert("No resume found");
    return;
  }

  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i); // ✅ FIXED
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  const blobURL = URL.createObjectURL(blob);
  window.open(blobURL, '_blank');
}


export {formatDate, getBase64, formatInterviewTime, openBase64PDF};