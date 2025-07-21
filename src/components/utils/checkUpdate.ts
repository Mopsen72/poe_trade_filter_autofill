export async function checkForUpdates() {
    const repo = 'Mopsen72/poe_trade_filter_autofill';
    const currentVersion = chrome.runtime.getManifest().version;

    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
        const data = await response.json();
        const latestVersion = data.tag_name.replace(/^v/, '');

        return compareVersions(latestVersion, currentVersion) > 0;
    } catch (error) {
        console.error('Ошибка при проверке обновлений:', error);
        throw new Error('Ошибка при проверке обновлений')
    }
}

// Функция сравнения версий
export function compareVersions(a: string, b: string) {
    const partsA = a.split('.').map(Number);
    const partsB = b.split('.').map(Number);

    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        const partA = partsA[i] || 0;
        const partB = partsB[i] || 0;
        if (partA > partB) return 1;
        if (partA < partB) return -1;
    }
    return 0;
}