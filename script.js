function buySamplePack(samplePack) {
    // Simulate the buying process
    alert('Thank you for your purchase! Your download will start shortly.');

    // Create a temporary link element to download the file
    const link = document.createElement('a');
    link.href = samplePack; // Replace this with the actual URL of your sample packs
    link.download = samplePack;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
